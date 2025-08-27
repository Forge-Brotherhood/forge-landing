#!/bin/bash

# AWS SES Email Template Management Script for Forge Beta Signups

# Color output for better readability
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if AWS CLI is installed
check_aws_cli() {
    if ! command -v aws &> /dev/null; then
        echo -e "${RED}AWS CLI is not installed. Please install it first.${NC}"
        exit 1
    fi
}

# Function to check AWS credentials
check_credentials() {
    if ! aws sts get-caller-identity &> /dev/null; then
        echo -e "${RED}AWS credentials are not configured. Please configure them first.${NC}"
        echo "Run: aws configure"
        exit 1
    fi
}

# Function to create/update template
create_or_update_template() {
    echo -e "${YELLOW}Creating/Updating SES email template...${NC}"
    
    # Check if template exists
    if aws ses get-template --template-name ForgeBetaSignup &> /dev/null 2>&1; then
        echo "Template exists. Updating..."
        # Delete existing template first (SES doesn't have direct update)
        aws ses delete-template --template-name ForgeBetaSignup
        echo "Existing template deleted."
    fi
    
    # Create template
    if aws ses create-template --cli-input-json file://beta-signup-template.json; then
        echo -e "${GREEN}✓ Template 'ForgeBetaSignup' created successfully!${NC}"
    else
        echo -e "${RED}✗ Failed to create template${NC}"
        exit 1
    fi
}

# Function to test sending email
test_email() {
    read -p "Enter test email address: " test_email
    
    echo -e "${YELLOW}Sending test email to $test_email...${NC}"
    
    # Create test data JSON
    cat > test-data.json <<EOF
{
    "Source": "noreply@forge-app.io",
    "Template": "ForgeBetaSignup",
    "Destination": {
        "ToAddresses": ["$test_email"]
    },
    "TemplateData": "{\"supportUrl\":\"https://forge-app.io/support\",\"year\":\"2025\"}"
}
EOF
    
    if aws ses send-templated-email --cli-input-json file://test-data.json; then
        echo -e "${GREEN}✓ Test email sent successfully!${NC}"
    else
        echo -e "${RED}✗ Failed to send test email. Make sure:${NC}"
        echo "  1. Your email/domain is verified in SES"
        echo "  2. You're not in sandbox mode (or recipient is verified)"
    fi
    
    # Clean up test data
    rm -f test-data.json
}

# Function to list all templates
list_templates() {
    echo -e "${YELLOW}Listing all SES templates...${NC}"
    aws ses list-templates --query "TemplatesMetadata[].Name" --output table
}

# Function to get template details
get_template() {
    echo -e "${YELLOW}Getting template details for ForgeBetaSignup...${NC}"
    aws ses get-template --template-name ForgeBetaSignup --output json | jq '.'
}

# Function to delete template
delete_template() {
    read -p "Are you sure you want to delete the ForgeBetaSignup template? (y/N): " confirm
    if [[ $confirm == [yY] ]]; then
        if aws ses delete-template --template-name ForgeBetaSignup; then
            echo -e "${GREEN}✓ Template deleted successfully!${NC}"
        else
            echo -e "${RED}✗ Failed to delete template${NC}"
        fi
    else
        echo "Deletion cancelled."
    fi
}

# Main menu
main() {
    check_aws_cli
    check_credentials
    
    echo -e "\n${GREEN}=== Forge SES Template Manager ===${NC}\n"
    echo "1) Create/Update template"
    echo "2) Test send email"
    echo "3) List all templates"
    echo "4) Get template details"
    echo "5) Delete template"
    echo "6) Exit"
    
    read -p "Select option: " option
    
    case $option in
        1) create_or_update_template ;;
        2) test_email ;;
        3) list_templates ;;
        4) get_template ;;
        5) delete_template ;;
        6) exit 0 ;;
        *) echo -e "${RED}Invalid option${NC}"; main ;;
    esac
    
    # Return to menu
    echo -e "\nPress Enter to continue..."
    read
    main
}

# Run main function
main
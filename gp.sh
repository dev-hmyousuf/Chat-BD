#!/bin/bash

# Prompt the user for a commit message
read -p "Enter commit message: " commitMessage

# Add all changes to staging
git add .

# Commit the changes with the provided message
git commit -m "$commitMessage"

# Push the changes to the 'main' branch
git push origin main
#!/bin/bash

# Check if a URL is provided as an argument
if [ -z "$1" ]; then
    echo "Usage: $0 <URL>"
    exit 1
fi

# Set the URL and header values
url=$1
header="X-School-User-Id: 98"

# Send GET request with specified header and display the body
curl -H "$header" "$url"

#!/bin/bash

# Define the variable based on the first argument
case $1 in
  1) VAR="Animals" ;;
  2) VAR="Cities" ;;
  3) VAR="Nature" ;;
  4) VAR="Art" ;;
  5) VAR="Food" ;;
  *)
    echo "Usage: ./rename.sh [1-5]"
    echo "1: Animals, 2: Cities, 3: Nature, 4: Art, 5: Food"
    exit 1
    ;;
esac

echo "Renaming files to JigSolitaire_${VAR}_[number].png..."

# Initialize counter
count=1

# Loop through all files (excluding the script itself)
# We focus on files with common image extensions or all files
for file in *; do
    # Skip the script itself and directories
    if [[ "$file" == "rename.sh" || -d "$file" ]]; then
        continue
    fi

    # Define the new name
    new_name="JigSolitaire_${VAR}${count}.png"

    # Rename the file
    mv "$file" "$new_name"

    # Increment counter
    ((count++))
done

echo "Done! Renamed $((count-1)) files."
#!/bin/bash
#files will be saved in the dir 'Docker_images'

mkdir Docker_images
cd Docker_images || exit
directory=$(pwd)
c=0
#save the image names in 'list.txt'
doc= docker images --filter "dangling=false" | awk '{print $1}' > list.txt
printf "START \n"
input="$directory/list.txt"
#Check and create the image tar for the docker images
while IFS= read -r line
do
     one=$(echo "$line" | awk '{print $1}')
     two=$(echo "$line" | awk '{print $1}')
     if [ "$one" != "<none>" ]; then
             c=$((c+1))
             printf "\n $one \n $two \n"
             docker save -o "$two"'.tar' "$one"
             printf "Docker image number $one successfully converted: $two \n \n"
     fi
done < "$input"

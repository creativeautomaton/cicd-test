#!/bin/sh

# # Check if files are created???
# FILE=/ca-key.pem
# if [ -f "$FILE" ]; then
#     echo "$FILE exists."
# else
#     echo "$FILE does not exist."
# fi
#
# DIR="/"
# # look for empty dir
# if [ -d "$DIR" ]
# then
# 	if [ "$(ls -A $DIR)" ]; then
#      echo "Take action $DIR is not Empty"
# 	else
#     echo "$DIR is Empty"

#self signed ssl certificates

DOMAINS=crib.local
COMMON_NAME=crib.local
IP=127.0.0.1
SUBJECT="/C=US/ST=MO/L=SaintLouis/O=Global Security/OU=IT Department/CN=$COMMON_NAME"
PASS="foobar"

# gen root cert auth -- CA certificate to sign against
# openssl genrsa -out rootCA.key 2048
openssl genrsa -aes256 -passout pass:$PASS -out ca-key.pem 4096
openssl req -new -x509 -sha256 -days 1095 -subj "$SUBJECT" -passin pass:$PASS -key ca-key.pem -out ca.pem


openssl genrsa -passout pass:$PASS -out cert-key.pem 4096
openssl req -new -sha256 -subj "$SUBJECT" -passin pass:$PASS -key cert-key.pem -out cert.csr

# extfile.cnf
echo "subjectAltName=DNS:$COMMON_NAME,IP:$IP" >> extfile.cnf
# optional
echo extendedKeyUsage = serverAuth >> extfile.cnf

openssl x509 -req -sha256 -days 365 -passin pass:$PASS -in cert.csr -CA ca.pem -CAkey ca-key.pem -out cert.pem -trustout -extfile extfile.cnf -CAcreateserial

#   fi
#   else
#     echo "Directory $DIR not found."
# fi

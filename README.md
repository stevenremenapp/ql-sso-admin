# Quicken Loans Internship Project

I built this project for engineers at Quicken Loans who found that frequently referencing the tiny little data boxes and/or exporting CSV files from DynamoDB tables was annoying. This tool was requested and built to surface data in a user friendly way for engineers working on a specific feature.

This project is for demonstration purposes only and does not contain any real data. All secrets are strings courtesy of random.org.

This project is built using Angular and RxJS on the frontend, and connects with an AWS API Gateway and Lambda function to scan the necessary DynamoDB tables. There is some unit testing in Jasmine. It was requested that a Docker image be created to deploy the project at Quicken, but I have deployed it via AWS S3.

[See the live project here!](http://steve-sso-admin.s3-website.us-east-2.amazonaws.com/)

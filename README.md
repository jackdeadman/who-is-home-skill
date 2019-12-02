# Who is home?
An Amazon Alexa skill to check which residents are currently at home.

## Functionality

### Webapp
View who is currenly located in the house using the web application.

![Screenshot of the web application showing 2 out of the 3 housemates are at home](https://github.com/jackdeadman/who-is-home-skill/blob/master/screenshot.png?raw=true "Screenshot of webapp")

## Installation
### Prerequisites

This skill is intended to work on a Raspberry Pi (probably can work on anything supporting docker though). Firstly install **docker** and **docker-compose**. You can install these by following this [tutorial](https://dev.to/rohansawant/installing-docker-and-docker-compose-on-the-raspberry-pi-in-5-simple-steps-3mgl).

## Security
Obviously knowing who is currently located in the house could lead to a potential security issue. The only endpoint that is publically assessible is the one needed for the Amazon Alexa skill, this endpoint requires a signature from Amazon which is verified.

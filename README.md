# object-image-database

This repo is a file database used by [anttijankeri/object-image-server](https://github.com/anttijankeri/object-image-server). It saves images as files and then sends the filepath as a response to the server. The filepath is later sent to a separate MongoDB database to be documented. The server will need to authenticate with a key to ensure security.

This repo uses **Typescript**

## TODO

- basic setup
- api calls
- file streaming
- authentication

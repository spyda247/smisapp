# SMIS - Student Management Information System

## A terminal application for managing student grades

### Requirements

This application requires NodeJS installed on a Windows or MAC computer. You can download it from here, choose your operating system, then install.

- [NodeJS](https://nodejs.org/en/download)

Verify successful installation by running the following command in a terminal CLI application like Powershell or Command Prompt on windows. If it displays the node version number installation is successful. If it does not check that node is in your system path.

```
node -v
```

### Installation

The application requires some dependencies. To install the dependencies, navigate to the root of the application directory in a command terminal and run the following command

```
npm install
```

This will download and install the required project dependencies

### Setting up your database

This application uses mysql database, with a single table named students. Create the database and the table with the feilds as shown below

| Field | Type        | Null | Key | Default | Extra          |
| ----- | ----------- | ---- | --- | ------- | -------------- |
| id    | int(255)    | NO   | PRI | NULL    | auto_increment |
| name  | text        | YES  |     | NULL    |                |
| age   | int(20)     | YES  |     | NULL    |                |
| grade | varchar(20) | YES  |     | NULL    |                |

Create a database config file named db_config.js in the root directory with the following code

```
export const config = {
    host: '<your server hostname or localhost>',
    user: '<your db username>',
    password: '<your db password>'
}
```

The config object is exported as named export and imported in the file db_utils.js

### How to use

Open your terminal and run the command

```
npm run start
```

If you use windows powershell terminal, you can configure default terminal width by running the command.

```
npm run config
```

### Licenses

This application educational material is licensed under the GPL and MIT license and is free to use, hack and redistributed as you see fit under the license terms

Happy coding :smiley:

# Amenities Module

> Revamped back-end amenities module for the inherited bread4bed mock front-end capstone (Airbnb-clone).

## Related Projects

  - https://github.com/datalodge/calendar
  - https://github.com/datalodge/photos
  - https://github.com/datalodge/reviews

## Table of Contents

1. [Development](#development)

#Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
### Database Authentication
1. Rename `config_rename.js` to `config.js`
2. If mysql is not setup, see `### Mysql Setup` below.
3. If your mysql root user takes a password, please enter into into line 6 of the config.js file from step 1. Feel free to edit the user information as well, if you would prefer not to use root. 
*note* `config.js` is on the `.gitignore` file within this repo so that your password will not be uploaded to github. You will need to repeat these steps with every repo clone. 

### Database Seeding
1. Run `npm run seed` from within the amenities root directory
2. Test that table rows exist in the b4b_amenities database and amenities table by running in the mysql shell: 
`USE b4b_amenities`; 
`SELECT * FROM amenities`;  

### Mysql Setup
1. Install mysql5.7, if not already installed. Two commons options are Native Packages and Brew:
  a. Native Packages - https://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html
  b. Brew - `brew install mysql@5.7`
2. Ensure that MySQL Server is running on your computer (`mysql.server start` or `brew services start mysql`)

### Bundle with Webpack
1. Run `npm run build`

### start a server with nodemon
1. Run `npm start`

**Amenities CRUD API v. 1.00**
----

* Description: These are the API requests to interact with the database for the amenities component. 

* See below for detailed route parameters and information.

## GET Amenities
  Returns amenities for a single home based on the homeId param

* **URL**

  /api/amenities/:homeId

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ 
      id : [Integer],
      name : [String],
      appeal: [Integer],
      category: [String],
      common: [Integer],
      description: [String],
      img_url: "[String]
      }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Amenities for this home does not exist" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/amenities/108",
      dataType: "json",
      type : "GET",
      success : function(result) {
        console.log(result);
      }
    });
  ```
---------------------------------------------------------------------------------------------------------

## POST Amenity

  **Add Amenity to Home**
----
  Creates an amenity in the amenities table.

* **URL**

  /api/amenities/:homeId

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

`{ 
      id : [Integer],
      name : [String],
      appeal: [Integer],
      category: [String],
      common: [Integer],
      description: [String],
      img_url: "[String]
      }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ 
      id : 16,
      name : "Jacuzzi",
      appeal: 8,
      category: "Hip",
      common: "0",
      description: "Great for the whole family",
      img_url: "https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/jacuzzi.png"
      }`
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Home not found" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/amenities/108",
      dataType: "json",
      type : "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      success : function(result) {
        console.log(result);
      }
    });
  ```

---------------------------------------------------------------------------------------------------------


## PUT Amenity

**Update Amenity**
----
  Updates json data about a single amenity.

* **URL**

  /amenities/:homeId

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

`{ 
      id : [Integer],
      name : [String],
      appeal: [Integer],
      category: [String],
      common: [Integer],
      description: [String],
      img_url: "[String]
      }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ 
      id : 16,
      name : "Jacuzzi",
      appeal: 8,
      category: "Hip",
      common: "0",
      description: "Great for the whole family",
      img_url: "https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/jacuzzi.png"
      }`
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Amenity doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/amenities/105",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```
---------------------------------------------------------------------------------------------------------

## DELETE Amenity

**Delete Amenity**
----
  Deletes json data about a single amenity.

* **URL**

  /amenities/:homeId

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ response: "Amenity has been removed}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />

  OR

  * **Code:** 401 UNAUTHORIZED <br />

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/amenities/188",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```

  ## Change History
|Name                                 |Version    |Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Description     |
|:----------------------------------- |:--------- |:--------- |:------- |
|[@victorx716](https://github.com/victorx716) |1.1     |2019-02-28 |Update initial API CRUD routes for `Amenities` microservice.
|[@victorx716](https://github.com/victorx716) |1.0     |2019-02-27 |Document initial API CRUD routes for `Amenities` microservice.

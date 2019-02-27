**Show Home**
----
  Returns amenities for a single home based on the homeId param

* **URL**

  /api/amenities/:homeId

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ 
      id : 8,
      name : "Wifi",
      appeal: 9,
      category: "Basic",
      common: "1",
      description: "Continuous access in the listing  ",
      img_url: "https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/wifi.png"
      }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Home does not exist" }`

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

  **Add Amenity to Home**
----
  Creates amenities for a single home.

* **URL**

  /api/amenities/:homeId

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

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
    **Content:** `{ error : "Home does not exist" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/amenities/108",
      dataType: "json",
      type : "POST",
      success : function(result) {
        console.log(result);
      }
    });
  ```
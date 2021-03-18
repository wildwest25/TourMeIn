<template>
  <div class="user_profile">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <img src="@/assets/img-thumnail.svg" />
           <div class="form-group">
              <label for="nameSurname">Name and Surname</label><br>
              <label for="DOB">20.12.2000</label><br>
            </div>
        </div>
        <div class="col-fluid">
          <form>
            <div class="form-group">
              <div id="form-text">
              <label for="exampleInputEmail1" float=left>Email address</label>
              </div>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleContact">Contact Number</label>
              <input
                type="contact"
                class="form-control"
                id="exampleContact"
                placeholder="+385 00000-0000"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputLanguages">Languages</label>
              <input
                type="languages"
                class="form-control"
                id="exampleInputLanguages"
                placeholder="Croatian, English.."
              />
            </div>
            <div class="form-group">
              <label for="examplevisited">Places I visited</label>
              <input
               type="placesvisited"
               class="form-control"
               id="examplevisited"
               placeholder="Amphiteathre, Kastel Fort..."
               />
            </div>
            <div class="form-group">
              <label for="userinfo">About me</label>
              <textarea id="userInfo" rows="3" class="form-control"></textarea>
            </div>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
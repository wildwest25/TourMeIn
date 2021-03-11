<template>
  <div class="guide_profile">
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
              <label for="exampleInputEmail1">Email address</label>
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
            <form
              name="someForm"
              method="post"
              action="/someAction.do"
              class="form-inline"
            >
            </form>
            <form
              name="someForm"
              method="post"
              action="/someAction.do"
              class="form-inline"
            >
            </form>
            <form
              name="someForm"
              method="post"
              action="/someAction.do"
              class="form-inline"
            >
            </form>
            <!--<button type="submit" class="btn btn-primary">Register</button> save? -->
          </form>
          <form
            name="someForm"
            method="post"
            action="/someAction.do"
            class="form-inline"
          >
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
      <form
            name="someForm"
            method="post"
            action="/someAction.do"
            class="form-inline"
          >
          </form>
    </div>
  </div>
</template>
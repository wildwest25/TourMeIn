<template>
  <div class="guide_profile">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
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
                placeholder="+385 000000000"
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
              <label for="exampleMonuments">Monuments I Tour</label>
              <input
                type="monuments"
                class="form-control"
                id="exampleMonuments"
                placeholder="Amphiteater, Triumphal Arch.."
              />
            </div>
            <!--<button type="submit" class="btn btn-primary">Register</button> save? -->
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
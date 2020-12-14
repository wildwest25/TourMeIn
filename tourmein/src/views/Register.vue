<template>
  <div class="register">
    <h1>Registration Form</h1>
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
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleUsername">Username</label>
              <input
                type="username"
                class="form-control"
                id="exampleUsername"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="exampleName">Name</label>
              <input
                type="name"
                class="form-control"
                id="exampleName"
                placeholder="Enter name"
              />
            </div>
            <div class="form-group">
              <label for="exampleSurename">Last Name</label>
              <input
                type="lastname"
                class="form-control"
                id="exampleLastName"
                placeholder="Enter Last Name"
              />
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
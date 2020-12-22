<template>
  <div class="guide_profile">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <img src="@/assets/img-thumnail.svg" />
           <div class="form-group">
              <label for="nameSurname">Name and Surname</label><br>
              <label for="DOB">20.12.2000</label><br>
              <label for="rating">4.6</label>
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
            <div class="form-group">
              <label for="exampleMonuments">Monuments I Tour</label>
              <input
                type="monuments"
                class="form-control"
                id="exampleMonuments"
                placeholder="Amphiteater, Triumphal Arch.."
              />
            </div>
            <form
              name="someForm"
              method="post"
              action="/someAction.do"
              class="form-inline"
            >
              <div class="input-group">
                <div class="form-group">
                  <label for="startDate"> Hours Avaiable: </label>
                  <div>
                    <input
                      type="number"
                      name="startHour"
                      id="startHour"
                      style="width: 60px"
                      class="form-control"
                      placeholder="00"
                      step="1"
                      maxlength="2"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endDate"> : </label>
                  <div>
                    <input
                      type="number"
                      name="startMinute"
                      id="startMinute"
                      style="width: 60px"
                      class="form-control"
                      placeholder="00"
                      step="1"
                      maxlength="2"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> - </label>
                  <div>
                    <input
                      type="number"
                      name="endHour"
                      id="endHour"
                      style="width: 60px"
                      class="form-control"
                      placeholder="00"
                      step="1"
                      maxlength="2"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> : </label>
                  <div>
                    <input
                      type="number"
                      name="endMinute"
                      id="endMinute"
                      style="width: 60px"
                      class="form-control"
                      placeholder="00"
                      step="1"
                      maxlength="2"
                    />
                  </div>
                </div>
              </div>
            </form>
            <form
              name="someForm"
              method="post"
              action="/someAction.do"
              class="form-inline"
            >
              <div class="input-group">
                <div class="form-group">
                  <label for="startDate"> Days Avaiable: </label>
                  <div>
                    <input
                      type="checkbox"
                      name="mon"
                      id="monday"
                      style="width: 20px"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endDate"> Mon </label>
                  <div>
                    <input
                      type="checkbox"
                      name="tue"
                      id="tuesday"
                      style="width: 20px"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Tue</label>
                  <div>
                    <input
                      type="checkbox"
                      name="wed"
                      id="wednsday"
                      style="width: 20px"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Wed </label>
                  <div>
                    <input
                      type="checkbox"
                      name="thu"
                      id="thursday"
                      style="width: 20px"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Thu </label>
                  <div>
                    <input
                      type="checkbox"
                      name="fri"
                      id="friday"
                      style="width: 20px"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Fri </label>
                  <div>
                    <input
                      type="checkbox"
                      name="sat"
                      id="saturday"
                      style="width: 20px"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Sat </label>
                  <div>
                    <input
                      type="checkbox"
                      name="sun"
                      id="sunday"
                      style="width: 20px"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Sun </label>
                </div>
              </div>
            </form>
            <form
              name="someForm"
              method="post"
              action="/someAction.do"
              class="form-inline"
            >
              <div class="input-group">
                <div class="form-group">
                  <label for="pricing"> Pricing: </label>
                  <div>
                    <input
                      type="checkbox"
                      name="perHour"
                      id="perHour"
                      style="width: 20px"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="perHour"> Per Hour </label>
                  <div>
                    <input
                      type="checkbox"
                      name="perLandmark"
                      id="perLandmark"
                      style="width: 20px"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="perLandmark"> Per Landmark </label>
                </div>
              </div>
            </form>
            <!--<button type="submit" class="btn btn-primary">Register</button> save? -->
          </form>
          <form
            name="someForm"
            method="post"
            action="/someAction.do"
            class="form-inline"
          >
            <div class="input-group">
              <div class="form-group">
                <label for="costPerHour"> Cost Per Hour: </label>
                <div>
                  <input
                    type="text"
                    name="costPerHour"
                    id="costPerHour"
                    style="width: 55px"
                    class="form-control"
                    placeholder="---"
                    maxlength="3"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="costPerLandmark"> Cost Per Landmark: </label>
                <div>
                  <input
                    type="text"
                    name="costPerLandmark"
                    id="costPerLandmark"
                    style="width: 55px"
                    class="form-control"
                    placeholder="---"
                    maxlength="3"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="form-group">
                  <select class="form-control" id="currency">
                    <option>€</option>
                    <option>£</option>
                    <option>$</option>
                    <option>¥</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">About Me</label>
            <textarea
              class="form-control"
              id="aboutMe"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
      <form
            name="someForm"
            method="post"
            action="/someAction.do"
            class="form-inline"
          >
            <div class="input-group">
              <div class="form-group">
                <label for="costPerHour"> FB </label>
                <div>
                  <input
                    type="text"
                    name="fb"
                    id="facebookLink"
                    style="width: 300px"
                    class="form-control"
                    placeholder="Facebook Link"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="costPerLandmark"> TW </label>
                <div>
                  <input
                    type="text"
                    name="tw"
                    id="twitterLink"
                    style="width: 300px"
                    class="form-control"
                    placeholder="Twitter Link"
                  />
                </div>
              </div>
               <div class="form-group">
                <label for="costPerLandmark"> INSTA </label>
                <div>
                  <input
                    type="text"
                    name="insta"
                    id="instagramLink"
                    style="width: 300px"
                    class="form-control"
                    placeholder="Instagram Link"
                  />
                </div>
              </div>
            </div>
          </form>
    </div>
  </div>
</template>
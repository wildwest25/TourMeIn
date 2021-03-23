<template>
    <div class="registration_successful"> 

         <img
					src="@/assets/explore.jpg"
					alt="explore the world smjer"
					height= 50%
					width= 100%
					loading="lazy"
				/>
        <div class="container">
    <div class="row">
    <div class="col">
      <h1> You have successfully registered! </h1>
      <p>Your registration was successful, please check your e-mail for verification link to complete your registration process.</p>
     <div class="verify">
            <p> ---------------------------------------------------------------------------------------------</p>
            <h2> 1. Verify your Email </h2>
            <p>To ensure you're a legitimate user and not a robot, Email with verification link has been sent.</p> 
            <p>If you didn’t get any mail please click resend.</p>

            <div class="form-group">
							<button
								type="button"
								id="btresend"
								class="btn btn-primary"
								disabled="disabled"
							>
								Resend
							</button>
            </div>

     </div>
        
    <div class="complete_profile">

        <p> ---------------------------------------------------------------------------------------------</p>

        <h2> 2. Complete your profile </h2>

            <p>With your account confirmed, it's time to complete your profile.</p>
            <p>We've found that adding a profile photo and other information will increase your chances of connecting and touring TourMeIn users by 80%.</p>

        </div>
    </div>
    <div class="col">
       <div class="start_touring">

           <p> ----------------------------------------------------------------------------------------------</p>
            
            <h2> 3. Start touring with us </h2>

            <p> If you're a tourist - use our application to connect with guides and learn something new about places you visit. </p>
            <p> If you're a guide - connect with tourists in your town, be polite, share your knowledge and make some money. </p>
    <img
					src="@/assets/Logo-01.png"
					height="210"
                    width="190"
					alt="logo aplikacije"
					loading="lazy"
				/>
    </div>

     <div id="TRM"> TourMeIn </div> 

     <div>
								<br />
								<a href="/" class="btn btn-secondary">Home</a>
							</div>
    </div>
  </div>
</div>
 </div>
</template>
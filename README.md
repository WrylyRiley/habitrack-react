#HabiTrack

## Technologies

#### Original Plan
This app was originally planned out with the following stack:
* React on Rails (via react-rails gem)
* PostgreSQL (via Rails)
* Materialize (beta)

The following roadblocks were encountered along the way
* Rails doesn't expose the route helper methods
	* I first tried the js-routes gem, but the documentation is terribly confusing, and my understanding is that even if I installed it correctly, the fact that react-rails isn't using the asset-pipeline prevents me from including the generated routes in any of my JS
	* I overcame this limitation by just using Axios in React to send commands to my database
* Rails requires the use of the CSRF token when sending *form data* through to prevent cross-site scripting attacks
	* Solved this by allowing the use of the DB without this token. I could have included it in my exios request as well, but for testing, this was easier to implement
* The largest problem, and the one that was I could not overcome, was that there was no easy way to merge devise authentication with react.
	* User accounts are a big part of what I'm doing, and in my opinion, the whole intereaction with react is secondary. the react-devise gem has dependencies in react-router (not implemented on purpose), redux (not required for such a small project), and redux-form (again, not using redux).
	* I could have also followed (this)[https://labs.chiedo.com/blog/authenticating-your-reactjs-app-with-devise-no-extra-gems-needed/] tutorial, but it relies of ajax requests in my frontend, and I'm not about to rely on jQuery for handle my requests. It also appears to use a much older version of both rails and devise, and I was unable to adapt some of the instructions. 

#### Second Phase
Can't get it perfect the first time, every time, right? I'm now going to split out the front-end from rails and handle each independently. I'll set up a rails api to maintain the work I've done with Postgres and merge my existing components and design into a (new create-react-app template)[https://github.com/zbauer91/habitrack-react], which will allow me to implement some new kind of authentication based around node and react and easier routing. 


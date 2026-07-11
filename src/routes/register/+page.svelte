<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Register</title>

  <link href="https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.css" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-base-200">

  <div class="min-h-screen flex items-center justify-center">
    <div class="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
      <div class="card-body">

        <h1 class="text-3xl font-bold text-center">
          Register
        </h1>

        <form class="space-y-4 mt-4">

          <div>
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type your name"
              class="input input-bordered w-full"
            />
          </div>

          <div>
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type your email"
              class="input input-bordered w-full"
            />
          </div>

          <div>
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type your password"
              class="input input-bordered w-full"
            />
          </div>

          <button class="btn btn-primary w-full">
            Register
          </button>

        </form>

        <p class="text-center mt-4">
          Already have an account?
          <a href="/" class="link link-primary">
            Login
          </a>
        </p>

      </div>
    </div>
  </div>

</body>
</html>
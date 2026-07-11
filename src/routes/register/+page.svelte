<script lang="ts">
  import { register, login } from "$lib/auth";
  import { authClient } from "$lib/auth-client";
  import { resolve } from "$app/paths";
  import { goto } from "$app/navigation";

  const session = authClient.useSession();

  $effect(() => {
    if ($session.data) {
      goto(resolve("/profile"));
    }
  });

  let name: string = $state("");
  let email: string = $state("");
  let password: string = $state("");
  let errorMessage: string = $state("");

  async function handleRegister() {
    const registerRes = await register(name, email, password);

    if (registerRes.error) {
      errorMessage = registerRes.error.message as string;
      return;
    }

    await login(email, password);
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-base-200">
  <div class="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
    <div class="card-body">

      <h1 class="text-3xl font-bold text-center">
        Register
      </h1>

      <form on:submit|preventDefault={handleRegister} class="space-y-4 mt-4">

        <div>
          <label for="name" class="label">
            <span class="label-text">Name</span>
          </label>

          <input
            id="name"
            type="text"
            bind:value={name}
            placeholder="Type your name"
            class="input input-bordered w-full"
          />
        </div>

        <div>
          <label for="email" class="label">
            <span class="label-text">Email</span>
          </label>

          <input
            id="email"
            type="email"
            bind:value={email}
            placeholder="Type your email"
            class="input input-bordered w-full"
          />
        </div>

        <div>
          <label for="password" class="label">
            <span class="label-text">Password</span>
          </label>

          <input
            id="password"
            type="password"
            bind:value={password}
            placeholder="Type your password"
            class="input input-bordered w-full"
          />
        </div>

        {#if errorMessage}
          <p class="text-error text-sm">{errorMessage}</p>
        {/if}

        <button type="submit" class="btn btn-primary w-full">
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
<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" to="/"
              >Home</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/about"
              >About</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/employees"
              >Employees</nuxt-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="container">
    <NuxtPage />
  </div>
</template>

import { A } from '@solidjs/router'
import { createSignal, onMount } from 'solid-js'

function Navigation(props) {
  const [isCollapsed, setIsCollapsed] = createSignal(true)
  let navbarCollapseRef

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed())
  }

  const closeNavbar = () => {
    setIsCollapsed(true)
  }

  onMount(() => {
    // Initialize Bootstrap collapse functionality
    if (typeof window !== 'undefined' && window.bootstrap) {
      navbarCollapseRef = new window.bootstrap.Collapse(
        document.getElementById('navbarNav'),
        {
          toggle: false,
        },
      )
    }
  })

  const handleNavClick = (e) => {
    closeNavbar()
    // Use Bootstrap's collapse hide method if available
    if (navbarCollapseRef) {
      navbarCollapseRef.hide()
    }
    
    const path = e.target.getAttribute('href')
    props.navigate(path)
  }

  return (
    <nav class="navbar navbar-expand-lg fixed-top glass-navbar">
      <div class="container">
        {/* Brand */}
        <A
          class="navbar-brand fw-bold fs-3 glass-brand"
          href="/"
          onClick={handleNavClick}
        >
          CartIn
        </A>

        {/* Mobile toggle button */}
        <button
          class="navbar-toggler glass-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed()}
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div
          class={`collapse navbar-collapse ${!isCollapsed() ? 'show' : ''} py-2`}
          id="navbarNav"
        >
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <A
                class="nav-link glass-nav-link"
                href="/"
                activeClass="active"
                onClick={handleNavClick}
              >
                <i class="bi bi-house-fill me-1"></i>
                Home
              </A>
            </li>
            <li class="nav-item">
              <A
                class="nav-link glass-nav-link"
                href="/register"
                activeClass="active"
                onClick={handleNavClick}
              >
                <i class="bi bi-person-plus-fill me-1"></i>
                Register
              </A>
            </li>
            <li class="nav-item">
              <A
                class="nav-link glass-nav-link"
                href="/login"
                activeClass="active"
                onClick={handleNavClick}
              >
                <i class="bi bi-box-arrow-in-right me-1"></i>
                Login
              </A>
            </li>
          </ul>

          {/* Cart button */}
          <div class="d-flex">
            <A
              class="btn glass-cart-btn position-relative"
              href="/cart"
              onClick={handleNavClick}
            >
              <i class="bi bi-cart-fill fs-5"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill glass-badge">0<span class="visually-hidden">items in cart</span>
              </span>
            </A>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

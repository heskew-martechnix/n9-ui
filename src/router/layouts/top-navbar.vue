<template>
  <MdToolbar 
    md-elevation="0" 
    class="md-transparent"
  >
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">
          {{ $route.name }}
        </h3>
      </div>
      <div class="md-toolbar-section-end">
        <MdButton 
          class="md-just-icon md-simple md-toolbar-toggle" 
          :class="{toggled: $sidebar.showSidebar}" 
          @click="toggleSidebar"
        >
          <span class="icon-bar" />
          <span class="icon-bar" />
          <span class="icon-bar" />
        </MdButton>

        <div class="md-collapse">
          <div class="md-autocomplete">
            <MdAutocomplete 
              v-model="selectedEmployee" 
              class="search" 
              :md-options="employees"
            >
              <label>Search...</label>
            </MdAutocomplete>
          </div>
          <MdList>
            <MdListItem to="/">
              <i class="material-icons">
                dashboard
              </i>
              <p class="hidden-lg hidden-md">
                Dashboard
              </p>
            </MdListItem>

            <MdListItem 
              to="/notifications" 
              class="dropdown"
            >
              <DropDown>
                <a 
                  slot="title" 
                  class="dropdown-toggle" 
                  data-toggle="dropdown"
                >
                  <i class="material-icons">
                    notifications
                  </i>
                  <span class="notification">
                    5
                  </span>
                  <p class="hidden-lg hidden-md">
                    Notifications
                  </p>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li>
                    <a href="#">
                      Mike John responded to your email
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      You have 5 new tasks
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      You're now friend with Andrew
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Another Notification
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Another One
                    </a>
                  </li>
                </ul>
              </DropDown>
            </MdListItem>

            <MdListItem to="/user">
              <i class="material-icons">
                person
              </i>
              <p class="hidden-lg hidden-md">
                Profile
              </p>
            </MdListItem>
          </MdList>
        </div>
      </div>
    </div>
  </MdToolbar>
</template>

<script>
export default {
  data() {
    return {
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  }
};
</script>

<style lang="css">
</style>

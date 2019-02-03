<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100">
      <MdCard>
        <MdCardHeader class="md-card-header-icon md-card-header-green">
          <h4 class="title">
            {{ $t('components.eloquaFieldComparison.appName') }}
          </h4>
        </MdCardHeader>

        <MdCardContent>
          <div class="md-layout-item">
            <MdField>
              <label for="field1">
                {{ $t('components.eloquaFieldComparison.field1') }}
              </label>
              <MdSelect 
                id="field1" 
                v-model="movie" 
                name="field1" 
                md-dense
              >
                <MdOption value="fight-club">
                  Fight Club
                </MdOption>
                <MdOption value="godfather">
                  Godfather
                </MdOption>
                <MdOption value="godfather-ii">
                  Godfather II
                </MdOption>
                <MdOption value="godfather-iii">
                  Godfather III
                </MdOption>
                <MdOption value="godfellas">
                  Godfellas
                </MdOption>
                <MdOption value="pulp-fiction">
                  Pulp Fiction
                </MdOption>
                <MdOption value="scarface">
                  Scarface
                </MdOption>
              </MdSelect>
            </MdField>
          </div>

          <div class="md-layout-item">
            <MdField>
              <label for="field2">
                {{ $t('components.eloquaFieldComparison.field2') }}
              </label>
              <MdSelect 
                id="field2" 
                v-model="movie" 
                name="field2" 
                md-dense
              >
                <MdOption value="fight-club">
                  Fight Club
                </MdOption>
                <MdOption value="godfather">
                  Godfather
                </MdOption>
                <MdOption value="godfather-ii">
                  Godfather II
                </MdOption>
                <MdOption value="godfather-iii">
                  Godfather III
                </MdOption>
                <MdOption value="godfellas">
                  Godfellas
                </MdOption>
                <MdOption value="pulp-fiction">
                  Pulp Fiction
                </MdOption>
                <MdOption value="scarface">
                  Scarface
                </MdOption>
              </MdSelect>
            </MdField>
          </div>
          <div class="md-layout-item">
            <MdCheckbox
              v-model="boolean"
            >
              {{ $t('components.eloquaFieldComparison.ignoreLeadingSpaces') }}
            </MdCheckbox>
          </div>
        </MdCardContent>

        <MdCardActions md-alignment="left">
          <MdButton class="md-success">
            Submit
          </MdButton>
        </MdCardActions>
      </MdCard>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EloquaFieldComparison',
  components: {},
  data() {
    return {
      layout1: null,
      layout2: null,
      layout3: null,
      emailadress: null,
      emailadress1: null,
      placeholder: null,
      password: null,
      success: null,
      error: null,
      password1: null,
      password2: null,
      boolean: false,
      disabled: null,
      boolean1: false,
      helper: null,
      checkbox1: null,
      checkbox2: null,
      checkbox3: null,
      checkbox4: null,
      checkbox5: null,
      checkbox6: true,
      checkbox7: null,
      checkbox8: true,
      checkbox9: null,
      radio: true,
      radio1: true,
      radio2: true,
    }
  },
}
</script>
<style lang="scss" scoped>
.md-card .md-card-actions {
  border: none;
}

.md-inline-checkboxes {
  display: inline-flex;

  .md-checkbox {
    margin-top: 15px !important;
  }
}

.md-checkbox,
.md-radio {
  margin-top: 15px;
  margin-bottom: 0.5rem;
}

.md-checkbox,
.md-radio {
  display: flex;
}

.md-radio /deep/ .md-radio-container {
  margin-left: 5px;
  position: relative;
  left: -3px;
}

.md-form-label + .md-layout-item .md-checkbox:not(:first-child),
.md-form-label + .md-layout-item + .md-layout-item .md-radio:not(:first-child),
.md-form-label + .md-layout-item .md-radio {
  margin-top: 0;
}

.form-control-static {
  margin-top: 6px;
}
</style>

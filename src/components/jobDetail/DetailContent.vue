<script setup>
const props = defineProps({
  jobDetail: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="job-details pa-10">
    <div class="text-h5 font-weight-medium">{{ jobDetail.title || "No Title" }}</div>
    <div class="top-content d-flex justify-space-between">
      <div>
        <div
          class="text-subtitle-1 d-flex font-weight-bold mt-2 align-center primary-color"
        >
          {{ jobDetail.company?.name || "No Company Name" }}
        </div>
        <div class="d-flex align-center mt-2 m-flex-adjust">
          <div class="text-subtitle-2 text-grey-darken-3 m-adjust">
            <span class="text-color"> Experience : </span>
            <span>{{ jobDetail.experience || "N/A" }}</span>
          </div>
          <span class="mx-2 d-none d-flex-md">|</span>
          <div class="text-subtitle-2 m-adjust">
            <span class="text-color"> Salary : </span>
            <span> {{ jobDetail.salary || "N/A" }} </span>
          </div>
          <span class="mx-2 d-none d-flex-md">|</span>
          <div class="text-subtitle-2 text-grey-darken-3 m-adjust">
            <span class="text-color"> Job Type : </span>
            <span>{{ jobDetail.type || "N/A" }}</span>
          </div>
        </div>
        <div class="text-subtitle-2 text-grey-darken-3 mt-1 m-adjust">
          <span class="text-color"> Location : </span>
          <span>{{ jobDetail.location || "N/A" }}</span>
        </div>
        <div class="text-subtitle-2 text-grey-darken-3 mt-4">
          <span class="primary-color"> Deadline : </span>
          <span>{{ jobDetail.deadline || "N/A" }}</span>
        </div>
      </div>

      <div>
        <v-img
          :src="'data:image/png;base64,' + jobDetail.company?.logo"
          height="80"
          width="80"
          class="mr-4 border pa-1"
          rounded="lg"
          v-if="jobDetail.company?.logo"
        ></v-img>
      </div>
    </div>

    <div class="job-description border rounded-lg pa-5 mt-10">
      <div class="text-caption-1 font-weight-medium">Job description</div>
      <ul>
        <li>
          Global Digital Manufacturing Systems (GDMS) is responsible for designing,
          developing, and deploying software and data products that aid in the
          configuration, execution, reporting, and analysis of manufacturing systems and
          the data the process and equipment produces therein. The scope covers ECU
          Flashing, Calibration, and our data pipelines span concrete (physicals) to the
          Cloud (virtual).
        </li>
        <li>
          The Manufacturing Embedded Systems Applications team is responsible for
          designing, developing, and deploying Flashing, Diagnostics, and Testing Tools
          for in-plant operations teams that include engineers, process supervisors, and
          operators.
        </li>
        <li>
          The Diagnostics Software Engineering Lead will provide expertise and direct a
          software team based in Chennai or Bangalore, India. This person will collaborate
          and service the Manufacturing Diagnostics team s more extensive portfolio of
          products.
        </li>
        <li>
          The scope will include API development, Front-end applications for Mobile and
          Web, and backend services to enable connectivity with the underlying factory
          software platform infrastructure.
        </li>
      </ul>
      <div class="text-caption-2 mt-10 mb-2 font-weight-medium">
        The minimum requirements we seek:
      </div>
      <ul>
        <li>Bachelor s degree in computer science or related field.</li>
        <li>6+ years of experience in a technical/software engineer role</li>
        <li>
          1+ years of team leadership experience in leading at a first-line manager level
        </li>
        <li>6+ years of experience in a technical/software engineer role</li>
      </ul>

      <div class="text-subtitle-2 font-weight-medium mt-5">
        <span class="text-color">Role:</span> Technical Architect
      </div>

      <div class="text-subtitle-2 font-weight-medium mt-3">
        <span class="text-color">Industry Type:</span> Auto Components
      </div>
      <div class="text-subtitle-2 font-weight-medium mt-3">
        <span class="text-color">Department:</span> Auto Components
      </div>
      <div class="text-subtitle-2 font-weight-medium mt-3">
        <span class="text-color">Industry Type:</span> Engineering - Software & QA
        Employments
      </div>
    </div>

    <div class="bottom-content border rounded-lg pa-5 mt-5">
      <div class="text-caption-1 font-weight-medium primary-color">Apply Procedure</div>
      <div class="text-subtitle-2 font-weight-medium mt-4">Email Your C.V</div>
      <div class="text-subtitle-2 text-grey-darken-3 font-weight-regular mt-2">
        Send your C.V at
        <a href="#" class="primary-color font-weight-medium">{{
          jobDetail.company?.contactEmail
        }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.job-description {
  ul {
    li {
      list-style: disc;
      margin-left: 20px;
      font-size: 14px;
      color: var(--text-color);
      margin-top: 6px;
    }
  }
}

@media (min-width: 280px) and (max-width: 676.98px) {
  .m-flex-adjust {
    flex-direction: column !important;
    align-items: self-start !important;
  }
  .m-adjust {
    margin-top: 10px;
  }
}
</style>

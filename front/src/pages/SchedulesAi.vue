<template>
  <div class="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-6">
        Your Generated Schedules
      </h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(schedule, index) in schedules"
          :key="index"
          class="bg-white overflow-hidden shadow-sm rounded-lg"
        >
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg font-medium text-gray-900 mb-2">
              {{ schedule.title }}
            </h3>
            <div class="text-sm text-gray-500 mb-4">
              <p>Number of Subjects: {{ schedule.numberOfSubjects }}</p>
              <p>
                Average Time per Subject:
                {{ schedule.averageTimePerSubject }} hours
              </p>
            </div>
            <div
              class="flex justify-between items-center flex-wrap md:justify-center md:gap-2"
            >
              <button
                @click="showSchedule(schedule)"
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <EyeIcon class="h-4 w-4 mr-1" />
                Show Schedule
              </button>
              <a
                href="#"
                @click.prevent="downloadSchedule(schedule)"
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <DownloadIcon class="h-4 w-4 mr-1" />
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Schedule Pop-up Modal -->
    <modal-pop
      v-if="selectedSchedule"
      :schedule="selectedSchedule"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { EyeIcon, DownloadIcon } from "lucide-vue-next";
import ModalPop from "@/components/Schedule/ModalPop.vue";
const schedules = [
  {
    title: "Math Study Plan",
    numberOfSubjects: 5,
    averageTimePerSubject: 2.5,
  },
  {
    title: "Science Study Plan",
    numberOfSubjects: 4,
    averageTimePerSubject: 3,
  },
  {
    title: "History Study Plan",
    numberOfSubjects: 3,
    averageTimePerSubject: 1.5,
  },
  {
    title: "Language Study Plan",
    numberOfSubjects: 6,
    averageTimePerSubject: 2,
  },
  {
    title: "Art Study Plan",
    numberOfSubjects: 2,
    averageTimePerSubject: 1,
  },
];

const selectedSchedule = ref(null);

const showSchedule = (schedule) => {
  selectedSchedule.value = schedule;
};

const closeModal = () => {
  selectedSchedule.value = null;
};

const downloadSchedule = (schedule) => {
  // Implement download functionality here
  console.log(`Downloading ${schedule.title}`);
  // For demonstration purposes, we'll just log to console
  // In a real application, you would generate and download a file here
};
</script>

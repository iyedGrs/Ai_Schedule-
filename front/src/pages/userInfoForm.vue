<template>
  <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">
      Tell us about your study habits
    </h2>
    <form @submit.prevent="handleSubmit" class="space-y-8">
      <!-- General Questions -->
      <div class="space-y-6">
        <h3 class="text-xl font-semibold text-gray-700">General Information</h3>
        <div
          v-for="question in generalQuestions"
          :key="question.id"
          class="space-y-2"
        >
          <label
            :for="question.id"
            class="block text-sm font-medium text-gray-700"
          >
            {{ question.label }}
          </label>

          <input
            v-if="['text', 'number'].includes(question.type)"
            :id="question.id"
            :type="question.type"
            :min="question.min"
            :max="question.max"
            :step="question.step"
            :placeholder="question.placeholder"
            v-model="formData.general[question.id]"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />

          <div
            v-else-if="question.type === 'range'"
            class="flex items-center space-x-4"
          >
            <input
              :id="question.id"
              type="range"
              :min="question.min"
              :max="question.max"
              :step="question.step"
              v-model.number="formData.general[question.id]"
              class="w-full"
            />
            <span class="text-gray-700">{{
              formData.general[question.id]
            }}</span>
          </div>

          <select
            v-else-if="question.type === 'select'"
            :id="question.id"
            v-model="formData.general[question.id]"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Please select</option>
            <option
              v-for="option in question.options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>

          <div v-else-if="question.type === 'radio'" class="space-y-2">
            <div
              v-for="option in question.options"
              :key="option.value"
              class="flex items-center"
            >
              <input
                :id="`${question.id}-${option.value}`"
                type="radio"
                :name="question.id"
                :value="option.value"
                v-model="formData.general[question.id]"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                :for="`${question.id}-${option.value}`"
                class="ml-3 block text-sm font-medium text-gray-700"
              >
                {{ option.label }}
              </label>
            </div>
          </div>

          <div v-else-if="question.type === 'checkbox'" class="space-y-2">
            <div
              v-for="option in question.options"
              :key="option.value"
              class="flex items-center"
            >
              <input
                :id="`${question.id}-${option.value}`"
                type="checkbox"
                :value="option.value"
                v-model="formData.general[question.id]"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label
                :for="`${question.id}-${option.value}`"
                class="ml-3 block text-sm font-medium text-gray-700"
              >
                {{ option.label }}
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Subject Questions -->
      <div class="space-y-6">
        <h3 class="text-xl font-semibold text-gray-700">Subjects</h3>
        <div
          v-for="(subject, index) in formData.subjects"
          :key="index"
          class="bg-gray-50 p-4 rounded-md space-y-4"
        >
          <h4 class="text-lg font-medium text-gray-700">
            Subject {{ index + 1 }}
          </h4>
          <div
            v-for="question in subjectQuestions"
            :key="question.id"
            class="space-y-2"
          >
            <label
              :for="`subject-${index}-${question.id}`"
              class="block text-sm font-medium text-gray-700"
            >
              {{ question.label }}
            </label>

            <input
              v-if="['text', 'number'].includes(question.type)"
              :id="`subject-${index}-${question.id}`"
              :type="question.type"
              :min="question.min"
              :max="question.max"
              :step="question.step"
              :placeholder="question.placeholder"
              v-model="subject[question.id]"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <div
              v-else-if="question.type === 'range'"
              class="flex items-center space-x-4"
            >
              <input
                :id="`subject-${index}-${question.id}`"
                type="range"
                :min="question.min"
                :max="question.max"
                :step="question.step"
                v-model.number="subject[question.id]"
                class="w-full"
              />
              <span class="text-gray-700">{{ subject[question.id] }}</span>
            </div>
          </div>
          <button
            @click="removeSubject(index)"
            type="button"
            class="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Remove Subject
          </button>
        </div>
        <button
          @click="addSubject"
          type="button"
          class="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Add Subject
        </button>
      </div>

      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { generalQuestions, subjectQuestions } from "@/data/userQuestions";

const formData = reactive({
  general: {},
  subjects: [{}],
});

// Initialize formData with default values
generalQuestions.forEach((question) => {
  if (question.type === "checkbox") {
    formData.general[question.id] = [];
  } else {
    formData.general[question.id] = "";
  }
});

const addSubject = () => {
  formData.subjects.push({});
};

const removeSubject = (index) => {
  formData.subjects.splice(index, 1);
};

const handleSubmit = () => {
  console.log("Form submitted:", formData);
  // Here you would typically send the data to your backend or process it further
};
</script>

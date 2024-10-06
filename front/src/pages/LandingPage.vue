<template>
  <div class="min-h-screen rounded-bl-[20px]">
    <!-- Hero Section -->
    <header-landing />
    <!-- Features Section -->
    <div class="py-12 bg-white rounded-bl-[20px] rounded-br-[20px]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Features
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            A better way to manage your study time
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            TimeAI uses advanced algorithms to create personalized study
            schedules tailored to your unique needs and preferences.
          </p>
        </div>

        <div class="mt-10">
          <dl
            class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
          >
            <FeaturesLanding
              v-for="(feature, index) in features"
              :key="index"
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
            />
          </dl>
        </div>
      </div>
    </div>
    <CTASection />
  </div>
</template>

<script setup>
import { BrainIcon, BarChartIcon, UsersIcon, BellIcon } from "lucide-vue-next";
import FeaturesLanding from "@/components/Landing/FeaturesLanding.vue";
import HeaderLanding from "@/components/Landing/Header.vue";
import CTASection from "@/components/Landing/CTASection.vue";
const features = [
  {
    icon: BrainIcon,
    title: "AI-Powered Scheduling",
    description:
      "Our AI analyzes your study habits, subject preferences, and available time to create optimal study schedules.",
  },
  {
    icon: BarChartIcon,
    title: "Performance Tracking",
    description:
      "Monitor your progress and receive insights on how to improve your study efficiency over time.",
  },
  {
    icon: UsersIcon,
    title: "Collaborative Learning",
    description:
      "Connect with study partners and integrate group study sessions into your personalized schedule.",
  },
  {
    icon: BellIcon,
    title: "Smart Reminders",
    description:
      "Receive timely notifications to keep you on track with your study goals and deadlines.",
  },
];
</script>

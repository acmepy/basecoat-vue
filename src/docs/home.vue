<script setup>
import { ref, onMounted } from "vue";

import bcSelect from "../components/bc-select.vue";
import bcCard from "../components/bc-card.vue";
import bcList from "../components/bc-list.vue";
import bcInput from "../components/bc-input.vue";
import bcRadio from "../components/bc-radio.vue";
import bcButton from "../components/bc-button.vue";
import bcDivider from "../components/bc-divider.vue";
import bcPassword from "../components/bc-password.vue";
import bcMessages from "../components/bc-messages.vue";
import bcToolbar from "../components/bc-toolbar.vue";

/*
  import { getCurrentInstance } from "vue";
  const { proxy } = getCurrentInstance();

proxy.$loading.open();
setTimeout(() => {
    proxy.$loading.close();
  }, 2000);
*/

onMounted(() => {
  window.preloader.open();
  setTimeout(() => {
    window.preloader.close();
  }, 2000);
});

const teams = [
  {
    img: "/images/avatar-1.png",
    title: "Sofia Davis",
    footer: "m@example.com",
    after: {
      type: "select",
      value: "viewer",
      items: [
        { value: "viewer", text: "Viewer" },
        { value: "developer", text: "Developer" },
        { value: "billing", text: "Billing" },
        { value: "owner", text: "Owner", selected: true },
      ],
    },
  },
  {
    img: "/images/avatar-2.png",
    title: "Jackson Lee",
    footer: "p@example.com",
    after: {
      type: "select",
      value: "billing",
      items: [
        { value: "viewer", text: "Viewer" },
        { value: "developer", text: "Developer" },
        { value: "billing", text: "Billing" },
        { value: "owner", text: "Owner", selected: true },
      ],
    },
  },
  {
    img: "/images/avatar-3.png",
    title: "Isabella Nguyen",
    footer: "i@example.com",
    after: {
      type: "select",
      value: "owner",
      items: [
        { value: "viewer", text: "Viewer" },
        { value: "developer", text: "Developer" },
        { value: "billing", text: "Billing" },
        { value: "owner", text: "Owner", selected: true },
      ],
    },
  },
];

const cookies = [
  {
    title: "Strictly Necessary",
    footer:
      "These cookies are essential in order to use the website and use its features.",
    after: { type: "switch", checked: true },
  },
  {
    title: "Functional Cookies",
    footer:
      "These cookies allow the website to provide personalized functionality.",
    after: { type: "switch", checked: false },
  },
  {
    title: "Performance Cookies",
    footer: "These cookies help to improve the performance of the website.",
    after: { type: "switch", checked: false },
  },
];

const months = [
  { value: "01", text: "January" },
  { value: "02", text: "February" },
  { value: "03", text: "March" },
  { value: "04", text: "April" },
  { value: "05", text: "May" },
  { value: "06", text: "June" },
  { value: "07", text: "July" },
  { value: "08", text: "August" },
  { value: "09", text: "September" },
  { value: "10", text: "October" },
  { value: "11", text: "November" },
  { value: "12", text: "December" },
];
const selectedMonth = ref(months[0].value);
const years = [
  { value: "2024", text: "2024" },
  { value: "2025", text: "2025" },
  { value: "2026", text: "2026" },
  { value: "2027", text: "2027" },
  { value: "2028", text: "2028" },
  { value: "2029", text: "2029" },
  { value: "2030", text: "2030" },
  { value: "2031", text: "2031" },
  { value: "2032", text: "2032" },
  { value: "2033", text: "2033" },
  { value: "2034", text: "2034" },
];
const selectedYear = ref(years[0].value);

const areas = [
  { value: "team", text: "Team" },
  { value: "billing", text: "Billing" },
  { value: "account", text: "Account" },
  { value: "deployments", text: "Deployments" },
  { value: "support", text: "Support" },
];
const selectedArea = ref(areas[0].value);

const levels = [
  { value: "1", text: "Severity 1 (Highest)" },
  { value: "2", text: "Severity 2" },
  { value: "3", text: "Severity 3" },
  { value: "4", text: "Severity 4 (Lowest)" },
];
const selectedLevel = ref(levels[0].value);

const payMethods = [
  {
    label: "Card",
    radioName: "payment-method-type",
    id: "payment-method-type-apple",
    inputClass: "hidden peer",
    iconify: "ic:round-credit-card",
    width: 36,
    height: 36,
  },
  {
    label: "Pay Pal",
    radioName: "payment-method-type",
    id: "payment-method-type-card",
    inputClass: "hidden peer",
    svg: '<svg role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>PayPal</title><path d="M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z"/></svg>',
  },
  {
    label: "Apple Pay",
    radioName: "payment-method-type",
    id: "payment-method-type-paypal",
    inputClass: "hidden peer",
    svg: '<svg role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>',
  },
];
</script>

<template>
  <!--bcToolbar position="top">
      <bcButton text="Home" iconify="mdi:home" buttonClass="flex flex-col items-center text-sm text-gray-600" />
      <bcButton text="Buscar" iconify="mdi:search" buttonClass="flex flex-col items-center text-sm text-gray-600" />
      <bcButton text="Perfil" iconify="mdi:person" buttonClass="flex flex-col items-center text-sm text-gray-600" />
    </bcToolbar-->
  <bcToolbar>
    <bcButton
      text="Home"
      iconify="material-symbols:home"
      buttonClass="flex flex-col items-center text-sm text-gray-600"
    />
    <bcButton
      text="Buscar"
      iconify="mdi:search"
      buttonClass="flex flex-col items-center text-sm text-gray-600"
    />
    <bcButton
      text="Perfil"
      iconify="mdi:person"
      buttonClass="flex flex-col items-center text-sm text-gray-600"
    />
  </bcToolbar>

  <div class="p-4 md:p-6 xl:p-12">
    <div class="max-w-screen-lg mx-auto">
      <header class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            All of the shadcn/ui magic, none of the React
          </h1>
          <p class="sm:text-lg text-muted-foreground">
            A components library built with Tailwind CSS that works with any web
            stack.
          </p>
        </div>
        <div class="flex w-full items-center justify-start gap-2 pt-2">
          <a class="btn" href="https://basecoatui.com/installation"
            >Get Started</a
          >
          <a class="btn-outline" href="https://basecoatui.com/introduction"
            >Learn more</a
          >
          <bcButton
            buttonClass="btn-outline"
            text="Preloader"
            @click="
              () => {
                const load = bcLoading;
                load.open();
              }
            "
          />
        </div>
      </header>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <div class="flex flex-col gap-4">
          <bcCard
            title="Team Members"
            subtitle="Invite your team members to collaborate."
          >
            <bcList :items="teams" />
          </bcCard>

          <bcCard
            title="Cookie Settings"
            subtitle="Manage your cookie settings here."
            sectionClass="text-sm grid gap-6"
          >
            <bcList
              :items="cookies"
              titleClass="font-medium"
              footerClass="text-muted-foreground"
              liClass="flex items-center justify-between gap-2"
              groupClass="flex flex-col gap-0.5"
            />
            <template #footer>
              <button type="button" class="btn-outline w-full">
                Save preferences
              </button>
            </template>
          </bcCard>

          <bcCard
            title="Payment Method"
            subtitle="Add a new payment method to your account."
          >
            <form class="form grid gap-6">
              <bcRadio :items="payMethods" />
              <bcInput
                label="Name"
                type="text"
                id="payment-method-name"
                placeholder="John Doe"
                containerClass="grid gap-2"
              />
              <bcInput
                label="City"
                type="text"
                id="payment-method-city"
                placeholder="New York"
                containerClass="grid gap-2"
              />
              <bcInput
                label="Card Number"
                type="text"
                id="payment-method-card-number"
                placeholder="1234 5678 9012 3456"
                containerClass="grid gap-2"
              />
              <div class="flex gap-4">
                <bcSelect
                  label="Expires"
                  id="payment-method-expiration-month"
                  v-model="selectedMonth"
                  :options="months"
                  containerClass="grid gap-2 flex-1"
                />
                <bcSelect
                  label="Year"
                  id="payment-method-expiration-year"
                  v-model="selectedYear"
                  :options="years"
                  containerClass="grid gap-2 flex-1"
                />
                <bcInput
                  label="CVV"
                  type="text"
                  id="payment-method-cvv"
                  placeholder="123"
                  containerClass="grid gap-2 flex-1"
                />
              </div>
              <button type="button" class="btn w-full">Continue</button>
            </form>
          </bcCard>
        </div>

        <div class="flex flex-col gap-4">
          <bcMessages
            avatar="/images/avatar-1.png"
            name="Sofia Davis"
            email="m@example.com"
            :messages="[
              { type: 'received', text: 'Hi, how can I help you today?' },
              {
                type: 'sent',
                text: 'Hey, I\'m having trouble with my account.',
              },
              { type: 'received', text: 'What seems to be the problem?' },
              { type: 'sent', text: 'I can\'t log in.' },
            ]"
          />

          <bcCard
            title="Create an account"
            subtitle="Enter your email below to create your account"
            sectionClass="grid gap-6"
          >
            <div class="flex gap-6">
              <bcButton
                text="GitHub"
                buttonClass="btn-outline flex-1"
                svg='<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
              />
              <bcButton
                text="Google"
                buttonClass="btn-outline flex-1"
                svg='<svg role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>'
              />
            </div>
            <bcDivider label="Or continue with" />
            <form class="form grid gap-6">
              <bcInput label="Email" type="email" id="demo-card-form-email" />
              <bcPassword
                label="Password"
                inputId="demo-card-form-password"
                resetLabel="Forgot your password?"
                resetLink="/"
              />
              <bcButton text="Create an account" buttonClass="btn w-full" />
            </form>
          </bcCard>

          <bcCard
            title="Report an issue"
            subtitle="What area are you having problems with?"
          >
            <form class="form grid gap-6">
              <div class="flex gap-4">
                <bcSelect
                  label="Area"
                  id="report-issue-area"
                  v-model="selectedArea"
                  :options="areas"
                  containerClass="grid gap-2 flex-1"
                />
                <bcSelect
                  label="Security Level"
                  id="report-issue-security-level"
                  v-model="selectedLevel"
                  :options="levels"
                  containerClass="grid gap-2 flex-1"
                />
              </div>
              <bcInput
                label="Subject"
                type="text"
                id="report-issue-subject"
                placeholder="I need help with..."
                inputClass="w-full"
                containerClass="grid gap-2"
              />
              <bcInput
                label="Description"
                type="text"
                id="report-issue-description"
                placeholder="Please include all information relevant to your issue.."
                inputClass="w-full"
                containerClass="grid gap-2"
              />
              <!-- se necesita algo como card-form -->
              <footer class="flex items-center gap-4 justify-between">
                <button type="button" class="btn-sm-ghost">Cancel</button>
                <button type="button" class="btn-sm">Continue</button>
              </footer>
            </form>
          </bcCard>
        </div>
      </section>
    </div>
  </div>
</template>

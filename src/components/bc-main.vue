<script setup lang="ts">
  import {ref} from 'vue'
  import bcSidebarToggle from './bc-sidebar-toggle.vue';
  import bcThemeSelect from './bc-theme-select.vue';
  import bcThemeSwitcher from './bc-theme-switcher.vue';
  import bcGithub from './bc-github.vue';
  import bcSelect from './bc-select.vue';
  import bcCard from './bc-card.vue';
  import bcList from './bc-list.vue';
  import bcInput from './bc-input.vue';
  import bcRadio from './bc-radio.vue';
  import bcButton from './bc-button.vue';
import BcDivider from './bc-divider.vue';
import BcPassword from './bc-password.vue';
import BcMessages from './bc-messages.vue';

  const teams = [
    {img:"../assets/images/avatar-1.png", title:"Sofia Davis", footer:"m@example.com", after:{type:'select', value:"viewer", items:[
        {value:"viewer", text:"Viewer"},
        {value:"developer", text:"Developer"},
        {value:"billing", text:"Billing"},
        {value:"owner", text:"Owner", selected:true}
    ]}},
    {img:"../assets/images/avatar-2.png", title:"Jackson Lee", footer:"p@example.com", after:{type:'select', value:"billing", items:[
        {value:"viewer", text:"Viewer"},
        {value:"developer", text:"Developer"},
        {value:"billing", text:"Billing"},
        {value:"owner", text:"Owner", selected:true}
    ]}},
    {img:"../assets/images/avatar-3.png", title:"Isabella Nguyen", footer:"i@example.com", after:{type:'select', value:"owner", items:[
        {value:"viewer", text:"Viewer"},
        {value:"developer", text:"Developer"},
        {value:"billing", text:"Billing"},
        {value:"owner", text:"Owner", selected:true}
    ]}},      
  ]

  const cookies = [
    {title:'Strictly Necessary', footer:'These cookies are essential in order to use the website and use its features.', after:{type:'switch', checked:true}},
    {title:'Functional Cookies', footer:'These cookies allow the website to provide personalized functionality.', after:{type:'switch', checked:false}},
    {title:'Performance Cookies', footer:'These cookies help to improve the performance of the website.', after:{type:'switch', checked:false}}
  ]

  const months = [
    { value: '01', text: 'January' },
    { value: '02', text: 'February' },
    { value: '03', text: 'March' },
    { value: '04', text: 'April' },
    { value: '05', text: 'May' },
    { value: '06', text: 'June' },
    { value: '07', text: 'July' },
    { value: '08', text: 'August' },
    { value: '09', text: 'September' },
    { value: '10', text: 'October' },
    { value: '11', text: 'November' },
    { value: '12', text: 'December' }
  ]
  const selectedMonth = ref(months[0].value)
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
    { value: "2034", text: "2034" }
  ]
  const selectedYear = ref(years[0].value)
</script>

<template>
  <main id="content">
		<header class="bg-background sticky inset-x-0 top-0 isolate flex shrink-0 items-center gap-2 border-b z-10">
			<div class="flex h-14 w-full items-center gap-2 px-4">
        <bcSidebarToggle/>
        <bcThemeSelect/>
        <bcThemeSwitcher/>
        <bcGithub/>
			</div>
		</header>

	  <div class="p-4 md:p-6 xl:p-12">
		
      <div class="max-w-screen-lg mx-auto">
        <header class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">All of the shadcn/ui magic, none of the React</h1>
            <p class="sm:text-lg text-muted-foreground">A components library built with Tailwind CSS that works with any web stack.</p>
          </div>
          <div class="flex w-full items-center justify-start gap-2 pt-2">
            <a class="btn" href="https://basecoatui.com/installation">Get Started</a>
            <a class="btn-outline" href="https://basecoatui.com/introduction">Learn more</a>
          </div>
        </header>

        <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          <div class="flex flex-col gap-4">
            <bcCard title="Team Members" subtitle="Invite your team members to collaborate.">
              <bcList :items="teams"/>
            </bcCard>

            <bcCard title="Cookie Settings" subtitle="Manage your cookie settings here." sectionClass="text-sm grid gap-6">
              <bcList :items="cookies" titleClass="font-medium" footerClass="text-muted-foreground" liClass="flex items-center justify-between gap-2" groupClass="flex flex-col gap-0.5"/>
              <template #footer>
                <button type="button" class="btn-outline w-full">Save preferences</button>
              </template>
            </bcCard>

            <bcCard title="Payment Method" subtitle="Add a new payment method to your account.">
              <form class="form grid gap-6">
                <bcRadio />
                <bcInput label="Name" type="text" inputId="payment-method-name" placeholder="John Doe" containerClass="grid gap-2"/>
                <bcInput label="City" type="text" inputId="payment-method-city" placeholder="New York" containerClass="grid gap-2"/>
                <bcInput label="Card Number" type="text" inputId="payment-method-card-number" placeholder="1234 5678 9012 3456" containerClass="grid gap-2"/>
                <div class="flex gap-4">
                  <bcSelect label="Expires" id="payment-method-expiration-month" v-model="selectedMonth" :options="months" containerClass="grid gap-2 flex-1"/>
                  <bcSelect label="Year" id="payment-method-expiration-year" v-model="selectedYear" :options="years" containerClass="grid gap-2 flex-1"/>
                  <bcInput label="CVV" type="text" inputId="payment-method-cvv" placeholder="123" containerClass="grid gap-2 flex-1"/>
                </div>
                <button type="button" class="btn w-full">Continue</button>
              </form>
            </bcCard>
          </div>
        
          <div class="flex flex-col gap-4">
            <BcMessages avatar='../assets/images/avatar-1.png' name='Sofia Davis' email='m@example.com' :messages="[
        			{type:'received', text:'Hi, how can I help you today?'},
			        {type:'sent', text:'Hey, I\'m having trouble with my account.'},
			        {type:'received', text:'What seems to be the problem?'},
			        {type:'sent', text:'I can\'t log in.'},
		        ]"/>
            <!--div class="card">
              <section class="space-y-6">
                <header class="flex items-center gap-2">
                  <img src="../assets/images/avatar-1.png" alt="Sofia Davis" class="w-10 h-10 rounded-full" />
                  <div class="flex flex-col gap-1 mr-auto">
                    <h3 class="text-sm font-medium leading-none">Sofia Davis</h3>
                    <p class="text-sm text-muted-foreground">m@example.com</p>
                  </div>
                  <button type="button" class="btn-icon-outline rounded-full" data-tooltip="New message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                  </button>
                </header>
                <section class="space-y-4">
                <div class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted"> Hi, how can I help you today?</div>
                <div class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground"> Hey, I'm having trouble with my account.</div>
                <div class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted"> What seems to be the problem?</div>
                <div class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground"> I can't log in.</div>
                </section>
                <footer class="flex items-center gap-2">
                <input type="text" class="input w-full" placeholder="Type your message here..." oninput="
                  if (this.value) {
                  this.parentElement.querySelector('button').removeAttribute('disabled');
                  } else {
                  this.parentElement.querySelector('button').setAttribute('disabled', 'true');
                  }
                "/>
                <button type="button" class="btn-icon" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>
                </button>
                </footer>
              </section>
            </div-->

            <bcCard title="Create an account" subtitle="Enter your email below to create your account" sectionClass="grid gap-6">
              <div class="flex gap-6">
                <bcButton text="GitHub" :svg="{title:'', path:'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'}" />
                <bcButton text="Google" :svg="{title:'', path:'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'}" />
              </div>
              <BcDivider label="Or continue with"/>
              <form class="form grid gap-6">
                <bcInput label="Email" type="email" inputId="demo-card-form-email"/>
                <BcPassword label="Password" inputId="demo-card-form-password" resetLabel="Forgot your password?" resetLink="/"/>
                <bcButton text="Create an account" buttonClass="btn w-full"/>
                <!--div class="grid gap-2">
                  <label for="demo-card-form-email">Email</label>
                  <input type="email" id="demo-card-form-email">
                </div-->
                <!--div class="grid gap-2">
                  <div class="flex items-center gap-2">
                  <label for="demo-card-form-password">Password</label>
                  <a href="index.html#" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">Forgot your password?</a>
                  </div>
                  <input type="password" id="demo-card-form-password">
                </div-->
                <!--button type="button" class="btn w-full">Create an account</button-->
              </form>
            </bcCard>

            <bcCard title="Report an issue" subtitle="What area are you having problems with?">
              <form class="form grid gap-6">
              <div class="flex gap-4">
                <div class="grid gap-2 flex-1">
                <label for="report-issue-area">Area</label>
                <select id="report-issue-area" class="w-full">
                  <option value="team">Team</option>
                  <option value="billing">Billing</option>
                  <option value="account">Account</option>
                  <option value="deployments">Deployments</option>
                  <option value="support">Support</option>
                </select>
                </div>
                <div class="grid gap-2 flex-1">
                <label for="report-issue-security-level">Security Level</label>
                <select id="report-issue-security-level" class="w-full">
                  <option value="1">Severity 1 (Highest)</option>
                  <option value="2">Severity 2</option>
                  <option value="3">Severity 3</option>
                  <option value="4">Severity 4 (Lowest)</option>
                </select>
                </div>
              </div>
              <div class="grid gap-2">
                <label for="report-issue-subject">Subject</label>
                <input type="text" id="report-issue-subject" placeholder="I need help with..." class="w-full" />
              </div>
              <div class="grid gap-2">
                <label for="report-issue-description">Description</label>
                <textarea id="report-issue-description" placeholder="Please include all information relevant to your issue." class="w-full"></textarea>
              </div>
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
	</main>
</template>

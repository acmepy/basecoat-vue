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

				<bcCard title="Cookie Settings" subtitle="Manage your cookie settings here." classSection="text-sm grid gap-6">
          <bcList :items="cookies" classTitle="font-medium" classFooter="text-muted-foreground" />
          <!--label class="flex items-center justify-between gap-2">
            <div class="flex flex-col gap-0.5">
              <div class="font-medium">Strictly Necessary</div>
              <div class="text-muted-foreground">These cookies are essential in order to use the website and use its features.</div>
            </div>
            <input type="checkbox" role="switch" class="input" checked />
				  </label>
				  <label class="flex items-center justify-between gap-2">
            <div class="flex flex-col gap-0.5">
              <div class="font-medium">Functional Cookies</div>
              <div class="text-muted-foreground">These cookies allow the website to provide personalized functionality.</div>
            </div>
            <input type="checkbox" role="switch" class="input" />
				  </label>
				  <label class="flex items-center justify-between gap-2">
            <div class="flex flex-col gap-0.5">
              <div class="font-medium">Performance Cookies</div>
              <div class="text-muted-foreground">These cookies help to improve the performance of the website.</div>
            </div>
            <input type="checkbox" role="switch" class="input" />
				  </label-->
  				<template #footer>
	  			  <button type="button" class="btn-outline w-full">Save preferences</button>
          </template>
        </bcCard>

          <bcCard title="Payment Method" subtitle="Add a new payment method to your account.">
            <form class="form grid gap-6">
              <ul class="flex gap-4">
                <li class="flex-1">
                <input type="radio" name="payment-method-type" id="payment-method-type-apple" class="hidden peer" />
                <label for="payment-method-type-apple" class="text-sm font-medium leading-none flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-muted peer-checked:border-primary [&>svg]:mb-3 [&>svg]:size-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                  Card
                </label>
                </li>
                <li class="flex-1">
                <input type="radio" name="payment-method-type" id="payment-method-type-card" class="hidden peer" />
                <label for="payment-method-type-card" class="text-sm font-medium leading-none flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-muted peer-checked:border-primary [&>svg]:mb-3 [&>svg]:size-6">
                  <svg role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>PayPal</title><path d="M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z"/></svg>
                  Paypal
                </label>
                </li>
                <li class="flex-1">
                <input type="radio" name="payment-method-type" id="payment-method-type-paypal" class="hidden peer" />
                <label for="payment-method-type-paypal" class="text-sm font-medium leading-none flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-muted peer-checked:border-primary [&>svg]:mb-3 [&>svg]:size-6">
                  <svg role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>
                  Apple Pay
                </label>
                </li>
              </ul>
              <div class="grid gap-2">
                <bcInput label="Name" type="text" id="payment-method-name" placeholder="John Doe" />
              </div>
              <div class="grid gap-2">
                <bcInput label="City" type="text" id="payment-method-city" placeholder="New York" />
              </div>
              <div class="grid gap-2">
                <bcInput label="Card Number" type="text" id="payment-method-card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div class="flex gap-4">
                <div class="grid gap-2 flex-1">
                  <bcSelect label="Expires" id="payment-method-expiration-month" v-model="selectedMonth" :options="months"/>
                </div>
                <div class="grid gap-2 flex-1">
                  <bcSelect label="Year" id="payment-method-expiration-year" v-model="selectedYear" :options="years"/>
                </div>
                <div class="grid gap-2 flex-1">
                <label for="payment-method-cvv">CVV</label>
                <input type="text" id="payment-method-cvv" placeholder="123" maxlength="4" class="w-full" />
                </div>
              </div>
              <button type="button" class="btn w-full">Continue</button>
            </form>
          </bcCard>
			</div>
			
			<div class="flex flex-col gap-4">
			  <div class="card">
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
			  </div>

			  <div class="card">
				<header>
				  <h2>Create an account</h2>
				  <p>Enter your email below to create your account</p>
				</header>
				<section class="grid gap-6">
				  <div class="flex gap-6">
					<button type="button" class="btn-outline flex-1">
					  <svg role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
					  GitHub
					</button>
					<button type="button" class="btn-outline flex-1">
					  <svg role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
					  Google
					</button>
				  </div>
				  <div class="relative">
					<div class="absolute inset-0 flex items-center">
					  <span class="w-full border-t"></span>
					</div>
					<div class="relative flex justify-center text-xs uppercase">
					  <span class="bg-card px-2 text-muted-foreground">Or continue with</span>
					</div>
				  </div>
				  <form class="form grid gap-6">
					<div class="grid gap-2">
					  <label for="demo-card-form-email">Email</label>
					  <input type="email" id="demo-card-form-email">
					</div>
					<div class="grid gap-2">
					  <div class="flex items-center gap-2">
						<label for="demo-card-form-password">Password</label>
						<a href="index.html#" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">Forgot your password?</a>
					  </div>
					  <input type="password" id="demo-card-form-password">
					</div>
					<button type="button" class="btn w-full">Create an account</button>
				  </form>
				</section>
			  </div>

			  <div class="card">
				<header>
				  <h2>Report an issue</h2>
				  <p>What area are you having problems with?</p>
				</header>
				<section>
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
				</section>
			  </div>
			</div>
		  </section>
		</div>
	  </div>
	</main>
</template>

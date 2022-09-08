<script setup lang="ts">
definePageMeta({
    layout: 'home',
});

const isLoading = ref(true);

onMounted((): void => {
    setInterval(() => {
        setTimeout(() => {
            const logo: any | null = document.querySelector('.logo');
            logo.style.transform = 'scale(0.51)';
            setTimeout(() => {
                isLoading.value = false;
            }, 200);
        }, 1000);
    }, 200);
});

// const alerts = useAlertsStore();

// const { auth } = useDeskree();
// definePageMeta({
//   layout: "form-focus",
// });

// const form = reactive({
//   email: "",
//   password: "",
// });

// const loading = ref(false);
// async function handleLogin() {
//   loading.value = true;
//   try {
//     await auth.login(form);
//     useRouter().push("/");
//   } catch (err) {
//     alerts.error(
//       "Error logging in. Please ensure email and password are correct"
//     );
//   } finally {
//     loading.value = false;
//   }
// }
</script>

<template>
    <div>
        <img
            src="/logo.png"
            class="duration-1000 logo linear max-h-32 max-w-25"
            alt="logo"
        />
        <h3 v-if="isLoading" class="font-bold lowercase blue-gradient">
            teneno
        </h3>
        <div v-else>
            <div class="gap-12 flex-center-y">
                <div class="gap-4 flex-center">
                    <div class="w-15 h-15">
                        <img src="/nhap/square_avatar.png" alt="avatar" />
                    </div>
                    <h6 class="font-bold text-neutral-100 leading-h5">
                        Sanjay Shendy
                    </h6>
                </div>
                <IThreeDotVertical />
            </div>
            <div
                class="gap-4 mb-4 capitalize flex-center-y text-main-blue mt-7"
            >
                <IPlusRoundIcon />
                <p class="">Login Into Another Account</p>
            </div>
            <div class="gap-4 capitalize flex-center-y text-main-blue">
                <IFind />
                <p>Find your</p>
            </div>
        </div>
    </div>
    <div class="absolute bottom-5">
        <div v-if="!isLoading" class="my-10">
            <button class="btn-lg">Create New Teneno Account</button>
        </div>
        <div>
            <p class="text-main-light_grey">From</p>
            <div class="gap-1.5 flex-center text-neutral-80">
                <img
                    src="https://avatars.githubusercontent.com/u/71834167"
                    class="rounded-full max-h-6 max-w-6"
                />
                <h6>thuongtruong1009</h6>
            </div>
        </div>
    </div>
</template>

<script setup>
import AuthService from '@/services/auth.service';

const payload = reactive({
    email: '',
    password: '',
});
onMounted(async () => {
    const data = await AuthService.SignInLocalRequest(payload);
    console.log(data);
});
</script>

<script setup lang="ts">
import { login, type LoginRequest } from '@/api/auth-api';
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { AxiosInstance } from '@/lib/axios';
import { useAuthStore } from '@/stores/auth';
import { EyeIcon, EyeOffIcon } from 'lucide-vue-next';
import { useForm, Field as VeeField } from 'vee-validate';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

const { handleSubmit, isSubmitting, setErrors } = useForm({
    initialValues: {
        username: '',
        password: '',
    } as LoginRequest,
});

const state = reactive<{ showPassword: boolean }>({
    showPassword: false,
});

const onSubmit = handleSubmit(async (request) => {
    try {
        const { data } = await login(request);
        auth.setToken(data.data.token);
        router.push('/admin');
    } catch (error) {
        if (AxiosInstance.isAxiosError(error)) {
            if (error.status == 422) {
                setErrors(error.response?.data.errors);
            }
        }
    }
});

const togglePassword = () => {
    state.showPassword = !state.showPassword;
};
</script>

<template>
    <AuthLayout title="Login">
        <form @submit="onSubmit">
            <FieldGroup>
                <VeeField v-slot="{ field, errors }" name="username">
                    <Field :data-invalid="!!errors.length">
                        <FieldLabel for="username">Username</FieldLabel>
                        <Input id="username" v-bind="field" autocomplete="off" :aria-invalid="!!errors.length" />
                        <FieldError v-if="errors.length" :errors="errors" />
                    </Field>
                </VeeField>

                <VeeField v-slot="{ field, errors }" name="password">
                    <Field :data-invalid="!!errors.length">
                        <FieldLabel for="password">Password</FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                id="password"
                                :type="state.showPassword ? 'text' : 'password'"
                                v-bind="field"
                                autocomplete="off"
                                :aria-invalid="!!errors.length"
                            />
                            <InputGroupAddon align="inline-end">
                                <InputGroupButton type="button" @click="togglePassword">
                                    <EyeIcon v-if="state.showPassword" />
                                    <EyeOffIcon v-else />
                                </InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                        <FieldError v-if="errors.length" :errors="errors" />
                    </Field>
                </VeeField>
                <Field>
                    <Button type="submit" :disabled="isSubmitting" :is-loading="isSubmitting"> Login </Button>
                </Field>
            </FieldGroup>
        </form>
    </AuthLayout>
</template>

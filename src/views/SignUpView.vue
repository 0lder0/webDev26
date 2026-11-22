<template>
    <div class="login-container">
        <h1>Sign Up</h1>
        <form class="login-form" @submit.prevent="handleSubmit">
            <input class="form-control" type="email" placeholder="Email" v-model="email" required />
            <input  class="form-control" type="password" placeholder="Password" v-model="password" required @input="validatePassword"/>
            <div v-if="passwordErrors.length > 0" class="error-message">
                the password is not valid - {{ passwordErrors.join(', ') }}
            </div>
            <button class="btn btn-primary" type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignUpView',
    data() {
        return {
            email: '',
            password: '',
            passwordErrors: []
        }
    },
    methods: {
        validatePassword() {
            const password = this.password;
            this.passwordErrors = [];

            if (!(password.length >= 8 && password.length < 15)) {
                this.passwordErrors.push('The password should be of a specific length (at least 8 characters and less than 15 characters)');
            }
            if (!/[A-Z]/.test(password)) {
                this.passwordErrors.push('Includes at least one uppercase alphabet character');
            }
            if ((password.match(/[a-z]/g) || []).length < 2) {
                this.passwordErrors.push('Includes at least two lowercase alphabet characters');
            }
            if (!/\d/.test(password)) {
                this.passwordErrors.push('Includes at least one numeric value');
            }
            if (!/^[A-Z]/.test(password)) {
                this.passwordErrors.push('It should start with an uppercase letter');
            }
            if (!/_/.test(password)) {
                this.passwordErrors.push('It should include the character "_"');
            }
            return this.passwordErrors.length === 0;
        },
        handleSubmit() {
            if (this.validatePassword()) {
                this.$router.push({ name: 'home' });
            }
        }
    }
}
</script>
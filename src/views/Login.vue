<template>
    <div id="login-form">
        <div class="center">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>

<script>
    const axios = require('axios');

    export default {
        name: 'login',
        methods: {
            submit() {

                console.log("login????")
                axios.post("/api/v1/auth/login", {
                    username: this.form.username,
                    password: this.form.password
                }).then((response) => {
                    this.$router.push("/home")
                }).catch((response)=>{

                })
            }
        },
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        }
    }
</script>

<style lang="less" scoped>

    #login-form {
        width: 500px;
        display: flex;
        justify-content: center;
    }

</style>

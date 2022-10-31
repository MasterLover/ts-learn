<template>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
        <el-form-item prop="usernmae">
            <el-input v-model="ruleForm.usernmae" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('Please input the age'))
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'))
        } else {
            if (value < 18) {
                callback(new Error('Age must be greater than 18'))
            } else {
                callback()
            }
        }
    }, 1000)
}
//check input username
const validateUsername = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else {
        if (ruleForm.password !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}


//check input password
const validatepassword = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else
    //     if (value !== ruleForm.usernmae) {
    //     callback(new Error("Two inputs don't match!"))
    // } else
    {
        callback()
    }
}

const ruleForm = reactive({
    usernmae: '',
    password: '',
})

const rules = reactive({
    usernmae: [{ validator: validateUsername, trigger: 'blur' }],
    password: [{ validator: validatepassword, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

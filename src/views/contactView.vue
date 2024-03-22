<template>
  <div>
    <div class="topBanner_pc">
      <b-img src="../assets/contactBanner_pc.png" fluid alt="Responsive image"></b-img>
    </div>
    <div class="topBanner_mobile">
      <b-img
        src="../assets/contactBanner_mobile.png"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <section>
      <b-container>
        <div class="content_section">
          <p class="text-center">
            如有任何合作需求：您可以直接使用連絡電話，或是填入以下資料，稍候會有專人與您連絡。
          </p>
        </div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form_section">
          <b-row>
            <b-col md="6">
              <b-form-group id="input-group-1" label="姓名" label-for="name">
                <b-form-input
                  id="form_name"
                  name="name"
                  v-model="form.name"
                  placeholder="請輸入姓名"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group id="input-group-2" label="公司名稱" label-for="company">
                <b-form-input
                  id="form_company"
                  name="company"
                  v-model="form.company"
                  placeholder="請輸入公司名稱"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group id="input-group-3" label="電話" label-for="tel">
                <b-form-input
                  id="form_tel"
                  name="phone"
                  v-model="form.phone"
                  placeholder="請輸入電話"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group id="input-group-4" label="Email" label-for="email">
                <b-form-input
                  id="form_email"
                  name="email"
                  v-model="form.email"
                  type="email"
                  placeholder="請輸入Email"
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-button type="submit" class="submit_btn" variant="primary" @click="send()"
            >送出</b-button
          >
        </b-form>
      </b-container>
    </section>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin-bottom: 0 !important;
}

.content_section {
  font-size: 16px;
}

.form_section {
  border: 1px solid #f1f5f9;
  border-radius: 4px;
  padding: 30px;
  margin-bottom: 45px;
}

.form_section label {
  font-size: 14px;
}

.form_section input {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
}

.form_section input::placeholder {
  font-size: 14px;
}

.cbi_data {
  font-size: 14px;
}

.cbi_data .fs_18 {
  font-size: 18px;
}

.submit_btn {
  background-color: #4baaaa;
  border-radius: 8px;
  border: 0;
  width: 100%;
  padding: 15px;
  transition: all 0.3s;
}

.submit_btn:hover {
  background-color: #4baaaa;
  opacity: 0.9;
}
</style>

<script>
/* eslint-disable */
import Email from "@/assets/smtp/smtp.js";

export default {
  data() {
    return {
      form: {
        name: "",
        company: "",
        phone: "",
        email: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      //alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values

      this.form.name = "";
      this.form.company = "";
      this.form.phone = "";
      this.form.email = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
    },

    send() {
      const inputs = document.querySelector("form");

      Email.send({
        SecureToken: "b6367569-0f47-4cdb-9235-9206053dc51b",
        To: "admin@cloud-bridging.com",
        From: "miuccia@cloud-bridging.com",
        Subject: "雲湧資訊Admin",
        Body:
          "姓名: " +
          inputs.elements["name"].value +
          "<br>" +
          "公司: " +
          inputs.elements["company"].value +
          "<br>" +
          "電話: " +
          inputs.elements["phone"].value +
          "<br>" +
          "信箱: " +
          inputs.elements["email"].value,
      }).then((message) => {
        if (message == "OK") {
          alert("寄送成功");
        } else {
          alert("寄送失敗");
        }
      });
    },
  },
};
</script>

<template>
    <div class="subject">
        <div class="skills">
            <h3 class="clr2-green">实习经历</h3>
            <div class="company_details">
                <h4>{{company.companyName}}<span>{{company.bu}}</span>
                    <span>{{company.companyTime}}</span>
                </h4>
                <h6>{{company.job}}</h6>
                <ul v-for="jobContent in company.jobContent">
                    <li>{{jobContent.item}}</li>
                </ul>
            </div>
        </div>
        <div class="skills">
            <h3 class="clr-blue">教育经历</h3>
            <div class="education_details">
                <h4>{{education.school}}
                    <span>{{education.educationTime}}</span>
                </h4>
                <h6>{{education.major}}</h6>
                <ul v-for="schoolContent in education.schoolContent">
                    <li>{{schoolContent.item}}<span>{{schoolContent.date}}</span></li>
                </ul>
            </div>
        </div>
        <div class="skills">
            <h3 class="clr3-orange">技能清单</h3>
            <div class="skill_info">
                <div class="skill">
                    <ul v-for="skill in skills">
                        <li>{{skill.item}}</li>
                    </ul>
                </div>
                <div class="item"></div>
            </div>
        </div>
        <div class="skills">
            <h3 class="clr3-purple">校内项目</h3>
            <div class="skill_info">
                <div class="skill">
                    <ul v-for="work in works">
                        <li>{{work.item}}</li>
                    </ul>
                </div>
                <div class="item"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import jsonp from 'jsonp';

    export default {
        name: 'subject',
        data() {
            return {
                education: {},
                company: {},
                skills: {},
                works: {},
            };
        },
        methods: {},
        created() {
            jsonp('http://103.79.77.158:3000/data', null, (err, data) => {
                if (err) {
                    console.error(err.message);
                } else {
                    this.company = data[1].company;
                    this.education = data[2].education;
                    this.skills = data[3].skill.skills;
                    this.works = data[4].works;
                }
            });
        },
    };
</script>

<style scoped>
    li {
        list-style: square;
    }

    li span {
        margin-left: 15px;
    }
</style>

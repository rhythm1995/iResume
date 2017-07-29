<template>
    <div class="subject">
        <div class="education">
            <h3 class="clr3">Education</h3>
            <div class="education_details">
                <h4>University of Awesome<span>JANUARY 2004 - OCTOBER 2015</span></h4>
                <h6>MAJOR PHD</h6>
            </div>
        </div>
        <div class="company">
            <h3 class="clr1">Previous Employment</h3>
            <div class="company_details">
                <h4>Company Name <span>JUNE 2015 - PRESENT</span></h4>
                <h6>WEB DESIGNER</h6>
                <p class="cmpny1">
                    Nulla volutpat at est sed ultricies. In ac sem consequat, posuere nulla varius, molestie lorem. Duis quis nibh leo.
                    Curabitur a quam eu mi convallis auctor nec id mauris. Nullam mattis turpis eu turpis tincidunt, et pellentesque leo imperdiet.
                    Vivamus malesuada, sem laoreet dictum pulvinar, orci lectus rhoncus sapien, ut consectetur augue nibh in neque. In tincidunt sed enim et tincidunt.</p>
            </div>
            <div class="company_details">
                <h4>Company Name <span>NOVEMBER 2007 - MAY 2015</span></h4>
                <h6>WEB DESIGNER</h6>
                <p>
                    Nulla volutpat at est sed ultricies. In ac sem consequat, posuere nulla varius, molestie lorem. Duis quis nibh leo.
                    Curabitur a quam eu mi convallis auctor nec id mauris. Nullam mattis turpis eu turpis tincidunt, et pellentesque leo imperdiet.
                    Vivamus malesuada, sem laoreet dictum pulvinar, orci lectus rhoncus sapien, ut consectetur augue nibh in neque. In tincidunt sed enim et tincidunt.</p>
            </div>
        </div>
        <div class="skills">
            <h3 class="clr2">Professional skills</h3>
            <div class="skill_info">
                <div class="skill">
                    <ul>
                        <li>Photoshop</li>
                        <li>Flash</li>
                        <li>Dreemweeaver</li>
                        <li>In Design</li>
                        <li>PHP</li>
                        <li>Ruby on Rais</li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'subject',
        data () {
            return {
                education:[{
                    school:'',
                    major:'',
                    time:'',

                }],
                company:{

                },
                skill:{

                }
            };
        },
        methods: {}
    };
</script>

<style scoped>

</style>

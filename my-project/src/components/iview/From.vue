<template>
    <div>
        <div>input</div>
        <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></Input>
        <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        <div>单选</div>
        <div>
            <RadioGroup v-model="vertical" vertical>
                <Radio label="apple">
                    <Icon type="social-apple"></Icon>
                    <span>Apple</span>
                </Radio>
                <Radio label="android">
                    <Icon type="social-android"></Icon>
                    <span>Android</span>
                </Radio>
                <Radio label="windows">
                    <Icon type="social-windows"></Icon>
                    <span>Windows</span>
                </Radio>
            </RadioGroup>
        </div>
        <div>表格</div>
        <div>
            <Table border :columns="columns7" :data="data6"></Table>
        </div>
        <div>日期</div>
        <div>
            <Row>
                <Col span="12">
                    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                </Col>
                <Col span="12">
                    <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                </Col>
            </Row>
        </div>
        <div>联动选择</div>
        <div>
            <Cascader :data="data" trigger="hover"></Cascader>
        </div>
        
        
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value7: '',
                value8: '',
                vertical: 'apple',
                columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],
                 data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        },
        methods: {
                show (index) {
                    this.$Modal.info({
                        title: 'User Info',
                        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                    })
                },
                remove (index) {
                    this.data6.splice(index, 1);
                }
            }
        }
</script>
<style lang=''>

</style>


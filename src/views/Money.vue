<template>
<Layout class-prefix="layout">
  <NumberPad :value.sync="record.amount" @submit="saveRecord" />
  <Types :value.sync="record.type" />
  <div class="notes">
    <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes" />
  </div>
  <Tags />
</Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';

import tagListModel from '@/models/tagListModel';
import store from '@/store/index2.ts';
import {
  Component
} from 'vue-property-decorator';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tagList = tagListModel.fetch();

type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  createdAt ? : Date;
}

@Component({
  components: {
    Tags,
    FormItem,
    Types,
    NumberPad
  }
})

export default class Money extends Vue {

  recordList = store.recordList;
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0
  };
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>

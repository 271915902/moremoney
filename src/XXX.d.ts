type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number ;
  createdAt?: Date ;
}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  create: (name: string) => 'success' | 'duplicated' ;
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  remove: (id: string) => boolean;
  save: () => void;
}


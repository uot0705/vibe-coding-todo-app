class AddDeletedAtToTodos < ActiveRecord::Migration[6.0]
  def change
    # 論理削除のための日時を追加する。
    add_column :todos, :deleted_at, :datetime
    add_index :todos, :deleted_at
  end
end

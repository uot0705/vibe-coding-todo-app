class Todo < ApplicationRecord
  # タイトル必須。
  validates :title, presence: true
end

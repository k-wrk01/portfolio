class Api::WorksController < ApplicationController
  def index
    render json: [
      {
        "id": 1,
        "name": "○○システム",
        "jobs": "実装、単体テスト"
      },
      {
        "id": 2,
        "name": "○○システム",
        "jobs": "実装、単体テスト"
      },
      {
        "id": 3,
        "name": "○○システム",
        "jobs": "実装、単体テスト"
      },
      {
        "id": 4,
        "name": "○○システム",
        "jobs": "実装、単体テスト"
      },
      {
        "id": 5,
        "name": "○○システム",
        "jobs": "実装、単体テスト"
      },
      {
        "id": 6,
        "name": "○○システム",
        "jobs": "実装、単体テスト"
      },
      {
        "id": 7,
        "name": "○○システム",
        "jobs": "実装、単体テスト"
      },
      {
        "id": 8,
        "name": "○○システム",
        "jobs": "実装、単体テスト"
      },
    ]
  end
end

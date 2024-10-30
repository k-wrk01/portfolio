class Api::SkillsController < ApplicationController
  def index
    render json: [
      {
        "id": 1,
        "name": "HTML",
        "level": 5
      },
      {
        "id": 2,
        "name": "CSS",
        "level": 5
      },
      {
        "id": 3,
        "name": "React",
        "level": 1
      },
      {
        "id": 4,
        "name": "Ruby",
        "level": 5
      },
      {
        "id": 5,
        "name": "Ruby on Rails",
        "level": 5
      },
      {
        "id": 6,
        "name": "PostgreSQL",
        "level": 3
      }
    ]
  end
end

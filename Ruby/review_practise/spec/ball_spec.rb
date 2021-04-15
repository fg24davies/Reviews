require './lib/ball.rb'

describe Ball do

  it 'creates a ball instance with one argument' do
    expect(Ball).to respond_to(:new).with(1).argument
  end

  it 'is a ball instance' do
    expect(Ball.new("super")).to be_a Ball
  end


  describe '#balltype' do 
    it 'returns the ball type after initialising' do 
      ball1 = Ball.new("super")
      expect(ball1.ball_type).to eq ("super")
    end

    it 'has a default ball type "regular" after initialising' do 
      ball1 = Ball.new
      expect(ball1.ball_type).to eq ("regular")
    end
  end


end
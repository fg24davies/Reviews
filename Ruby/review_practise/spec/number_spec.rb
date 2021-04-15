require './lib/number.rb'

describe 'number' do

  it 'takes an empty array as input and returns an empty array' do
    expect(number([])).to eq []
  end

  it 'returns the position of the string and the string' do
    expect(number(["a"])).to eq   ["1: a"]  
  end

  it 'returns the positions of 2 strings and the strings' do 
    expect(number(["a", "b"])).to eq ["1: a", "2: b"]
  end
  
  it 'returns the positions of 2 strings and the strings' do 
    expect(number(["a", "b", "c"])).to eq ["1: a", "2: b", "3: c"] 
  end

end
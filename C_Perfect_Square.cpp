#include <bits/stdc++.h>
using namespace std;
#define ll long long 
int main(){

ll t;
cin>>t;
while(t--){
ll n;
cin>>n;
vector<string>v(n);
vector<string>o(n);
vector<string>r(n);
for(int i=0;i<n;i++){
cin>>v[i];
o[i]=v[i];
}
ll max=0;
for(int i=0;i<n;i++){
for(int j=0;j<i;j++){
if(int(o[i][j])>max){
    max=int(o[i][j]);
}


    swap(v[i][j],v[j][i]);
}


}

for(int i=0;i<n;i++){
for(int j=n-1;j>=0;j--){
r[i][n-1-j]=v[i][j];
}
}

ll sum=0;
for(int i=0;i<n;i++){
for(int j=0;j<n;j++){
    if(r[j][i]!=o[i][j]){
sum=sum +    (max - int(o[i][j]));
    }

}


}
cout<<sum<<endl;

















}



}
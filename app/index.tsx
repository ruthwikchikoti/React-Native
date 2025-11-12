import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import "./global.css"
import { useRouter } from 'expo-router'

const Index = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoWrap}>
          <Text style={styles.logoText}>VN</Text>
        </View>
        <Text style={styles.title}>Vigneshwara Novelties</Text>
        <Text style={styles.subtitle}>Your one-stop shop for gifts & jewellery</Text>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.primaryButton]} activeOpacity={0.85} onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.primaryButtonText} >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]} activeOpacity={0.85} onPress={() => router.push('/(auth)/signup')}>
            <Text style={styles.secondaryButtonText}>Signup</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.bottomHint}>Discover unique gifts & timeless treasures ✨</Text>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 350,
    minHeight: 470,
    borderRadius: 24,
    backgroundColor: '#fff',
    paddingVertical: 36,
    paddingHorizontal: 30,
    alignItems: 'center',
    shadowColor: '#d1d1e0',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 20,
    elevation: 12,
  },
  logoWrap: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#3975f4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#3975f4',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 6,
  },
  logoText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#28293e',
    marginBottom: 4,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#396487',
    marginBottom: 32,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 14,
    marginBottom: 28,
    gap: 14,
  },
  button: {
    flex: 1,
    borderRadius: 12,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
    minWidth: 110,
    elevation: 2,
  },
  primaryButton: {
    backgroundColor: '#3975f4',
    shadowColor: '#3975f4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1.8,
    borderColor: '#3975f4',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  secondaryButtonText: {
    color: '#3975f4',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  bottomHint: {
    marginTop: 10,
    color: '#6a19a0',
    fontWeight: '600',
    fontSize: 14.5,
    letterSpacing: 0.1,
    textAlign: 'center',
    opacity: 0.86,
  },
});
